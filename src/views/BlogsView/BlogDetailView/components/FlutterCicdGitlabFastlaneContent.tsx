'use client'

import {FC, useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {gitlabConfig} from '@/assets/codefile/gitlab-ci'

const FlutterCicdGitlabFastlaneContent: FC = () => {
	const [isCopied, setIsCopied] = useState(false)

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(gitlabConfig)
			setIsCopied(true)
			setTimeout(() => setIsCopied(false), 2000)
		} catch (err) {
			console.error('Failed to copy text:', err)
		}
	}

	return (
		<div className='space-y-6'>
			<section>
				<h2 className='text-2xl font-semibold text-blue-400 mb-4'>
					Introduction
				</h2>
				<p>
					In this comprehensive guide, we&apos;ll walk through setting up a
					complete CI/CD pipeline for your Flutter application using GitLab CI
					and Fastlane. Before diving into CI/CD, we&apos;ll first set up proper
					environment management using flavors, dart-define, and flutter_dotenv.
					This setup will automate your testing, building, and deployment
					processes for both iOS and Android platforms.
				</p>
			</section>

			<section>
				<h2 className='text-2xl font-semibold text-blue-400 mb-4'>
					Prerequisites
				</h2>
				<ul className='list-disc list-inside space-y-2'>
					<li>Flutter project hosted on GitLab</li>
					<li>GitLab Runner access</li>
					<li>Apple Developer Account (for iOS)</li>
					<li>Google Play Console Account (for Android)</li>
					<li>Basic understanding of CI/CD concepts</li>
					<li>Make installed on your system</li>
				</ul>
			</section>

			<section>
				<h2 className='text-2xl font-semibold text-blue-400 mb-4'>
					1. Environment Management Setup
				</h2>
				<p className='mb-4'>
					Before setting up CI/CD, we need to properly configure our
					development, staging, and production environments. This involves
					setting up flavors, using dart-define for compile-time constants, and
					flutter_dotenv for environment variables.
				</p>

				<h3 className='text-xl font-semibold text-gray-200 mb-3'>
					1.1 Setting Up Flutter Flavors
				</h3>
				<p className='mb-4'>
					In your{' '}
					<code className='text-green-400'>android/app/build.gradle</code>, add
					the following configuration:
				</p>
				<div className='bg-[#1E2127] p-4 rounded-lg mb-4'>
					<pre className='text-purple-400 whitespace-pre-wrap'>{`android {
    ...
    flavorDimensions "environment"
    productFlavors {
        dev {
            dimension "environment"
            applicationIdSuffix ".dev"
            resValue "string", "app_name", "MyApp Dev"
        }
        staging {
            dimension "environment"
            applicationIdSuffix ".staging"
            resValue "string", "app_name", "MyApp Staging"
        }
        prod {
            dimension "environment"
            resValue "string", "app_name", "MyApp"
        }
    }
}`}</pre>
				</div>

				<p className='mb-4'>
					For iOS, create xcconfig files for each environment:
				</p>
				<div className='bg-[#1E2127] p-4 rounded-lg mb-4'>
					<pre className='text-blue-400 whitespace-pre-wrap'>{`// Development.xcconfig
PRODUCT_BUNDLE_IDENTIFIER = com.myapp.dev
PRODUCT_NAME = MyApp Dev
FLUTTER_TARGET = lib/main_dev.dart

// Staging.xcconfig
PRODUCT_BUNDLE_IDENTIFIER = com.myapp.staging
PRODUCT_NAME = MyApp Staging
FLUTTER_TARGET = lib/main_staging.dart

// Production.xcconfig
PRODUCT_BUNDLE_IDENTIFIER = com.myapp
PRODUCT_NAME = MyApp
FLUTTER_TARGET = lib/main.dart`}</pre>
				</div>

				<h3 className='text-xl font-semibold text-gray-200 mb-3'>
					1.2 Using dart-define
				</h3>
				<p className='mb-4'>
					dart-define allows you to pass compile-time constants to your Flutter
					app. This is perfect for environment-specific configurations:
				</p>
				<div className='bg-[#1E2127] p-4 rounded-lg mb-4'>
					<pre className='text-green-400 whitespace-pre-wrap'>{`# Development
flutter run --flavor dev \\
    --dart-define=ENVIRONMENT=dev \\
    --dart-define=API_URL=https://api.dev.myapp.com

# Staging
flutter run --flavor staging \\
    --dart-define=ENVIRONMENT=staging \\
    --dart-define=API_URL=https://api.staging.myapp.com

# Production
flutter run --flavor prod \\
    --dart-define=ENVIRONMENT=prod \\
    --dart-define=API_URL=https://api.myapp.com`}</pre>
				</div>

				<p className='mb-4'>Access these values in your Dart code:</p>
				<div className='bg-[#1E2127] p-4 rounded-lg mb-4'>
					<pre className='text-green-400 whitespace-pre-wrap'>{`const environment = String.fromEnvironment('ENVIRONMENT', defaultValue: 'dev');
const apiUrl = String.fromEnvironment('API_URL', defaultValue: 'https://api.dev.myapp.com');

class EnvironmentConfig {
    static String get currentEnvironment => environment;
    static String get baseApiUrl => apiUrl;
    
    static bool get isDevelopment => environment == 'dev';
    static bool get isStaging => environment == 'staging';
    static bool get isProduction => environment == 'prod';
}`}</pre>
				</div>

				<h3 className='text-xl font-semibold text-gray-200 mb-3'>
					1.3 Using flutter_dotenv
				</h3>
				<p className='mb-4'>
					Add flutter_dotenv to your pubspec.yaml and create environment files:
				</p>
				<div className='bg-[#1E2127] p-4 rounded-lg mb-4'>
					<pre className='text-green-400 whitespace-pre-wrap'>{`dependencies:
  flutter_dotenv: ^5.1.0`}</pre>
				</div>

				<p className='mb-4'>Create environment files:</p>
				<div className='bg-[#1E2127] p-4 rounded-lg mb-4'>
					<pre className='text-blue-400 whitespace-pre-wrap'>{`# .env.dev
API_URL=https://api.dev.myapp.com
ANALYTICS_KEY=dev_analytics_key
SENTRY_DSN=https://dev-sentry-dsn

# .env.staging
API_URL=https://api.staging.myapp.com
ANALYTICS_KEY=staging_analytics_key
SENTRY_DSN=https://staging-sentry-dsn

# .env.prod
API_URL=https://api.myapp.com
ANALYTICS_KEY=prod_analytics_key
SENTRY_DSN=https://prod-sentry-dsn`}</pre>
				</div>

				<p className='mb-4'>Load environment variables in your main.dart:</p>
				<div className='bg-[#1E2127] p-4 rounded-lg mb-4'>
					<pre className='text-green-400 whitespace-pre-wrap'>{`import 'package:flutter_dotenv/flutter_dotenv.dart';

Future<void> main() async {
    // Initialize Flutter bindings
    WidgetsFlutterBinding.ensureInitialized();
    
    // Load environment file based on flavor
    const flavor = String.fromEnvironment('FLAVOR', defaultValue: 'dev');
    await dotenv.load(fileName: '.env.$flavor');
    
    runApp(MyApp());
}

// Environment variables access class
class Config {
    static String get apiUrl => dotenv.env['API_URL'] ?? '';
    static String get analyticsKey => dotenv.env['ANALYTICS_KEY'] ?? '';
    static String get sentryDsn => dotenv.env['SENTRY_DSN'] ?? '';
}`}</pre>
				</div>

				<h3 className='text-xl font-semibold text-gray-200 mb-3'>
					1.4 Creating a Makefile
				</h3>
				<p className='mb-4'>
					Create a Makefile to simplify all these commands:
				</p>
				<div className='bg-[#1E2127] p-4 rounded-lg mb-4'>
					<pre className='text-blue-400 whitespace-pre-wrap'>{`# Default variables
FLAVOR ?= dev
ENVIRONMENT ?= dev

# Environment-specific configurations
define DEV_CONFIG
	--dart-define=ENVIRONMENT=dev \\
	--dart-define=API_URL=https://api.dev.myapp.com \\
	--dart-define=ANALYTICS_KEY=dev_key
endef

define STAGING_CONFIG
	--dart-define=ENVIRONMENT=staging \\
	--dart-define=API_URL=https://api.staging.myapp.com \\
	--dart-define=ANALYTICS_KEY=staging_key
endef

define PROD_CONFIG
	--dart-define=ENVIRONMENT=prod \\
	--dart-define=API_URL=https://api.myapp.com \\
	--dart-define=ANALYTICS_KEY=prod_key
endef

# Run commands
run-dev:
	flutter run --flavor dev $(DEV_CONFIG)

run-staging:
	flutter run --flavor staging $(STAGING_CONFIG)

run-prod:
	flutter run --flavor prod $(PROD_CONFIG)

# Build commands
build-android-dev:
	flutter build apk --flavor dev $(DEV_CONFIG)

build-android-staging:
	flutter build apk --flavor staging $(STAGING_CONFIG)

build-android-prod:
	flutter build apk --flavor prod $(PROD_CONFIG)

# iOS build commands
build-ios-dev:
	flutter build ios --flavor dev $(DEV_CONFIG)

build-ios-staging:
	flutter build ios --flavor staging $(STAGING_CONFIG)

build-ios-prod:
	flutter build ios --flavor prod $(PROD_CONFIG)`}</pre>
				</div>
			</section>

			<section>
				<h2 className='text-2xl font-semibold text-blue-400 mb-4'>
					2. Setting Up Fastlane
				</h2>
				<h3 className='text-xl font-semibold text-gray-200 mb-3'>
					2.1 Installing Fastlane
				</h3>
				<div className='bg-[#1E2127] p-4 rounded-lg mb-4'>
					<pre className='text-green-400 whitespace-pre-wrap'>{`# For iOS
brew install fastlane

# For Android
gem install fastlane`}</pre>
				</div>
				<p className='mb-4'>
					After installation, initialize Fastlane in your iOS and Android
					project directories:
				</p>
				<div className='bg-[#1E2127] p-4 rounded-lg'>
					<pre className='text-green-400 whitespace-pre-wrap'>{`cd ios # or android
fastlane init`}</pre>
				</div>
			</section>

			<section>
				<h2 className='text-2xl font-semibold text-blue-400 mb-4'>
					3. GitLab CI Configuration
				</h2>
				<p className='mb-4'>
					Create a .gitlab-ci.yml file in your project root with the following
					configuration:
				</p>
				<div className='relative'>
					<button
						onClick={handleCopy}
						className='absolute top-4 right-4 px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-md hover:bg-blue-500/20 transition-colors z-10'
					>
						{isCopied ? 'Copied!' : 'Copy'}
					</button>
					<div className='bg-[#1E2127] rounded-lg overflow-hidden'>
						<SyntaxHighlighter
							language='yaml'
							style={oneDark}
							showLineNumbers
							customStyle={{
								margin: 0,
								padding: '1rem',
								background: 'transparent',
							}}
							wrapLongLines
						>
							{gitlabConfig}
						</SyntaxHighlighter>
					</div>
				</div>
			</section>

			<section>
				<h2 className='text-2xl font-semibold text-blue-400 mb-4'>
					4. Fastlane Configuration
				</h2>
				<h3 className='text-xl font-semibold text-gray-200 mb-3'>
					4.1 Android Setup
				</h3>
				<p className='mb-4'>
					Create a Fastfile in android/fastlane with the following lanes:
				</p>
				<div className='bg-[#1E2127] p-4 rounded-lg mb-6'>
					<pre className='text-purple-400 whitespace-pre-wrap'>{`default_platform(:android)

platform :android do
  desc "Build release APK for dev environment"
  lane :build_dev do
    gradle(
      task: "clean assembleDevRelease",
      properties: {
        "android.injected.signing.store.file" => ENV["KEYSTORE_FILE"],
        "android.injected.signing.store.password" => ENV["STORE_PASSWORD"],
        "android.injected.signing.key.alias" => ENV["KEY_ALIAS"],
        "android.injected.signing.key.password" => ENV["KEY_PASSWORD"],
      }
    )
  end

  desc "Build release APK for staging environment"
  lane :build_staging do
    gradle(
      task: "clean assembleStagingRelease",
      properties: {
        "android.injected.signing.store.file" => ENV["KEYSTORE_FILE"],
        "android.injected.signing.store.password" => ENV["STORE_PASSWORD"],
        "android.injected.signing.key.alias" => ENV["KEY_ALIAS"],
        "android.injected.signing.key.password" => ENV["KEY_PASSWORD"],
      }
    )
  end

  desc "Build release APK for production environment"
  lane :build_prod do
    gradle(
      task: "clean assembleProdRelease",
      properties: {
        "android.injected.signing.store.file" => ENV["KEYSTORE_FILE"],
        "android.injected.signing.store.password" => ENV["STORE_PASSWORD"],
        "android.injected.signing.key.alias" => ENV["KEY_ALIAS"],
        "android.injected.signing.key.password" => ENV["KEY_PASSWORD"],
      }
    )
  end

  desc "Deploy to Play Store Internal Testing"
  lane :deploy_internal do
    upload_to_play_store(
      track: 'internal',
      aab: '../build/app/outputs/bundle/prodRelease/app-prod-release.aab'
    )
  end

  desc "Deploy to Play Store Beta Testing"
  lane :deploy_beta do
    upload_to_play_store(
      track: 'beta',
      aab: '../build/app/outputs/bundle/stagingRelease/app-staging-release.aab'
    )
  end
end`}</pre>
				</div>

				<h3 className='text-xl font-semibold text-gray-200 mb-3'>
					4.2 iOS Setup
				</h3>
				<p className='mb-4'>Create a Fastfile in ios/fastlane:</p>
				<div className='bg-[#1E2127] p-4 rounded-lg'>
					<pre className='text-purple-400 whitespace-pre-wrap'>{`default_platform(:ios)

platform :ios do
  desc "Build release IPA for dev environment"
  lane :build_dev do
    match(type: "development")
    gym(
      scheme: "Runner-Dev",
      export_method: "development",
      configuration: "Release"
    )
  end

  desc "Build release IPA for staging environment"
  lane :build_staging do
    match(type: "appstore")
    gym(
      scheme: "Runner-Staging",
      export_method: "app-store",
      configuration: "Release"
    )
  end

  desc "Build release IPA for production environment"
  lane :build_prod do
    match(type: "appstore")
    gym(
      scheme: "Runner-Prod",
      export_method: "app-store",
      configuration: "Release"
    )
  end

  desc "Deploy to TestFlight"
  lane :deploy_testflight do
    pilot(
      skip_waiting_for_build_processing: true,
      skip_submission: true
    )
  end
end`}</pre>
				</div>
			</section>

			<section>
				<h2 className='text-2xl font-semibold text-blue-400 mb-4'>
					5. Environment Variables
				</h2>
				<p className='mb-4'>
					Set up the following environment variables in your GitLab CI/CD
					settings:
				</p>
				<ul className='list-disc list-inside space-y-2'>
					<li>ANDROID_KEYSTORE_FILE</li>
					<li>STORE_PASSWORD</li>
					<li>KEY_ALIAS</li>
					<li>KEY_PASSWORD</li>
					<li>MATCH_PASSWORD (for iOS)</li>
					<li>FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD</li>
					<li>API_URL_DEV, API_URL_STAGING, API_URL_PROD</li>
					<li>ANALYTICS_KEY_DEV, ANALYTICS_KEY_STAGING, ANALYTICS_KEY_PROD</li>
				</ul>
			</section>

			<section>
				<h2 className='text-2xl font-semibold text-blue-400 mb-4'>
					Conclusion
				</h2>
				<p>
					With this comprehensive setup, you now have a fully automated CI/CD
					pipeline for your Flutter application with proper environment
					management. The combination of flavors, dart-define, flutter_dotenv,
					and Makefile provides a robust foundation for managing different
					environments, while GitLab CI and Fastlane handle the automated
					testing, building, and deployment processes. Every push to your main
					branch will trigger the pipeline, running tests, building the app for
					all environments, and deploying to both app stores. This not only
					saves time but also ensures consistent quality and deployment
					processes across all environments.
				</p>
			</section>
		</div>
	)
}

export default FlutterCicdGitlabFastlaneContent
