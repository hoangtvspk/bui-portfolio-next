export const gitlabConfig = `### DEFINES STAGES:
stages:
  - analyze
  - test
  - build
  - deploy

### DEFINES ANCHORS:

# SETUP ENVIRONMENT
.setup_environment: &setup_environment
  - |
    echo "$ENV_DEV_CONTENT" > lib/core/config/.env.dev
    echo "$ENV_STAGING_CONTENT" > lib/core/config/.env.staging
    echo "$ENV_PROD_CONTENT" > lib/core/config/.env.prod

# SETUP GOOGLE PLAY SERVICE ACCOUNT
.setup_google_play_service_account: &setup_google_play_service_account
  - |
    cp "$GOOGLE_PLAY_JSON" google-play-service-account.json
    cat google-play-service-account.json
    echo "$KEYSTORE_BASE64" | base64 -d > android/app/app-release-key.jks
    echo "storePassword=$KEYSTORE_PASSWORD" > android/key.properties
    echo "keyPassword=$KEY_PASSWORD" >> android/key.properties
    echo "keyAlias=$KEY_ALIAS" >> android/key.properties
    echo "storeFile=app-release-key.jks" >> android/key.properties

# RETRY CONFIG
.retry_config: &retry_config
  retry:
    max: 2
    when:
      - runner_system_failure
      - stuck_or_timeout_failure

# CHECK PLATFORM TO BUILD
.check_platform_to_build: &check_platform_to_build
  - |
    if [[ "$CI_COMMIT_MESSAGE" =~ "android" ]]; then
      make build-appbundle-\${ENVIRONMENT}
      make build-android-\${ENVIRONMENT}
    fi
    if [[ "$CI_COMMIT_MESSAGE" =~ "ios" ]]; then
      make build-ipa-\${ENVIRONMENT}
    fi
    if [[ "$CI_COMMIT_MESSAGE" =~ "android-ios" ]]; then
      make build-appbundle-\${ENVIRONMENT}
      make build-android-\${ENVIRONMENT}
      make build-ipa-\${ENVIRONMENT}
    fi

# CHECK PLATFORM TO DEPLOY
.check_platform_to_deploy: &check_platform_to_deploy
  - |
    if [[ "$CI_COMMIT_MESSAGE" =~ "android" ]]; then
      cd android
      fastlane android deploy environment:\${ENVIRONMENT}
    fi
    if [[ "$CI_COMMIT_MESSAGE" =~ "ios" ]]; then
      cd ios
      fastlane ios deploy environment:\${ENVIRONMENT}
    fi
    if [[ "$CI_COMMIT_MESSAGE" =~ "android-ios" ]]; then
      cd android
      fastlane android deploy environment:\${ENVIRONMENT}
      cd ..
      cd ios
      fastlane ios deploy environment:\${ENVIRONMENT}
    fi

### DEFINES VARIABLES:
variables:
  FLUTTER_CHANNEL: 'stable'
  CACHE_KEY: \${CI_COMMIT_REF_SLUG}
  FASTLANE_HIDE_TIMESTAMP: 'true'
  FASTLANE_SKIP_UPDATE_CHECK: 'true'
  FASTLANE_DEBUG: 'true'

### CONFIGURES CACHE:
cache:
  key: \${CACHE_KEY}
  paths:
    - .pub-cache
    - .dart_tool/
    - .flutter-plugins
    - .flutter-plugins-dependencies
    - android/vendor/bundle
  policy: pull-push
  when: on_success

### RUNS BEFORE SCRIPT:
before_script:
  - *setup_environment
  - *setup_google_play_service_account
  - export LANG=en_US.UTF-8
  - export LC_ALL=en_US.UTF-8
  - flutter channel $FLUTTER_CHANNEL
  - flutter pub get

### RUN STAGES:
# ANALYZE & TEST
analyze:
  stage: analyze
  tags:
    - macos
  script:
    - make analyze

test:
  stage: test
  tags:
    - macos
  script:
    - make test

# BUILD & DEPLOY DEV
build-dev:
  stage: build
  tags:
    - macos
  variables:
    ENVIRONMENT: 'dev'
  <<: *retry_config
  rules:
    - if: '$CI_COMMIT_BRANCH == "dev" && $CI_COMMIT_MESSAGE =~ /deploy/'
  script:
    - *check_platform_to_build

  artifacts:
    paths:
      - build/app/outputs/bundle/devRelease/*.aab
      - build/app/outputs/flutter-apk/*.apk
      - build/ios/ipa/*.ipa

deploy-dev:
  stage: deploy
  tags:
    - macos
  variables:
    ENVIRONMENT: 'dev'
  needs:
    - build-dev
  <<: *retry_config
  rules:
    - if: '$CI_COMMIT_BRANCH == "dev" && $CI_COMMIT_MESSAGE =~ /deploy/'
  script:
    - *check_platform_to_deploy

# BUILD & DEPLOY STAGING
build-staging:
  stage: build
  tags:
    - macos
  variables:
    ENVIRONMENT: 'staging'
  <<: *retry_config
  rules:
    - if: '$CI_COMMIT_BRANCH == "staging" && $CI_COMMIT_MESSAGE =~ /deploy/'
  script:
    - *check_platform_to_build
  artifacts:
    paths:
      - build/app/outputs/bundle/release/*.aab
      - build/ios/ipa/*.ipa

deploy-staging:
  stage: deploy
  tags:
    - macos
  variables:
    ENVIRONMENT: 'staging'
  <<: *retry_config
  needs:
    - build-staging
  rules:
    - if: '$CI_COMMIT_BRANCH == "staging" && $CI_COMMIT_MESSAGE =~ /deploy/'
  script:
    - *check_platform_to_deploy

# BUILD & DEPLOY PROD
build-prod:
  stage: build
  tags:
    - macos
  variables:
    ENVIRONMENT: 'prod'
  <<: *retry_config
  rules:
    - if: '($CI_COMMIT_BRANCH == "master" || $CI_COMMIT_BRANCH == "main") && $CI_COMMIT_MESSAGE =~ /deploy/'
  script:
    - *check_platform_to_build
  artifacts:
    paths:
      - build/app/outputs/bundle/release/*.aab
      - build/ios/ipa/*.ipa

deploy-prod:
  stage: deploy
  tags:
    - macos
  variables:
    ENVIRONMENT: 'prod'
  <<: *retry_config
  needs:
    - build-prod
  rules:
    - if: '$CI_COMMIT_BRANCH == "main" && $CI_COMMIT_MESSAGE =~ /deploy/'
  script:
    - *check_platform_to_deploy`
