import React from 'react'

const sectionTitleStyle = {
	fontSize: 22,
	fontWeight: 'bold',
	textDecoration: 'underline',
	marginTop: 32,
	marginBottom: 12,
}

const itemTitleStyle = {
	fontSize: 18,
	fontWeight: 'bold',
	textDecoration: 'underline',
	marginTop: 20,
	marginBottom: 6,
}

const WvInitPolicyView = () => {
	return (
		<div
			style={{
				maxWidth: 700,
				margin: '40px auto',
				padding: 24,
				background: '#fff',
				borderRadius: 12,
				boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
			}}
		>
			<h1
				style={{
					textAlign: 'center',
					marginBottom: 32,
					fontSize: 30,
					fontWeight: 'bold',
					textDecoration: 'underline',
				}}
			>
				Privacy Policy / Chính sách bảo mật
			</h1>
			<section style={{marginBottom: 32}}>
				<div style={sectionTitleStyle}>English</div>
				<div style={itemTitleStyle}>1. Introduction</div>
				<p>
					Welcome to our app. We are committed to protecting your privacy. This
					Privacy Policy explains how we handle your information when you use
					our app and what permissions we require.
				</p>
				<div style={itemTitleStyle}>2. Data Collection</div>
				<p>
					We respect your privacy and only access data that is necessary for the
					app to function properly. We do <b>not</b> collect, store, or transmit
					your personal data to external servers without your explicit consent.
					All data accessed by the app remains on your device unless you choose
					to share it.
				</p>
				<div style={itemTitleStyle}>3. Permissions and Data Usage</div>
				<p>Our app requires the following permissions:</p>
				<ul style={{paddingLeft: 20, marginTop: 8, marginBottom: 8}}>
					<li style={{marginBottom: 8}}>
						<b>Internet Permission:</b> Required for network connectivity and
						downloading content when needed. We do not transmit your personal
						data without your consent.
					</li>
					<li style={{marginBottom: 8}}>
						<b>Camera Permission:</b> Required to capture photos or videos
						within the app. All images and videos are stored locally on your
						device and are not shared unless you explicitly choose to do so.
					</li>
					<li style={{marginBottom: 8}}>
						<b>Storage Permissions (Read/Write):</b> Required to save and access
						files, images, and other content on your device. This permission is
						only used to manage files created by or for the app. We do not
						access files outside of the app&apos;s designated storage area
						without your permission.
					</li>
					<li style={{marginBottom: 8}}>
						<b>Notification Permission:</b> Required to send you notifications
						about app updates, important information, or features. You can
						disable notifications at any time through your device settings.
					</li>
					<li style={{marginBottom: 8}}>
						<b>Notification Policy Permission:</b> Required to manage
						notification settings and ensure notifications work correctly
						according to your preferences.
					</li>
					<li style={{marginBottom: 8}}>
						<b>Contacts Permission:</b> Required to access your contacts list
						when you choose to use features that involve contacts. Contact
						information is accessed only when you explicitly use features that
						require it, and all data remains on your device. We do not upload,
						store, or share your contacts with third parties.
					</li>
				</ul>
				<div style={itemTitleStyle}>4. How We Use Your Data</div>
				<p>
					All permissions are used solely to provide the app&apos;s core
					functionality. We do not:
				</p>
				<ul style={{paddingLeft: 20, marginTop: 8, marginBottom: 8}}>
					<li style={{marginBottom: 4}}>
						Share your personal data with third parties
					</li>
					<li style={{marginBottom: 4}}>
						Use your data for advertising or marketing purposes
					</li>
					<li style={{marginBottom: 4}}>
						Sell your personal information to anyone
					</li>
					<li style={{marginBottom: 4}}>
						Access data beyond what is necessary for app functionality
					</li>
				</ul>
				<div style={itemTitleStyle}>5. Third-Party Services</div>
				<p>
					Our app may use third-party services for essential functionality (such
					as network requests). These services may have their own privacy
					policies, but we ensure that no personal data is transmitted without
					your knowledge.
				</p>
				<div style={itemTitleStyle}>6. Data Storage</div>
				<p>
					All data accessed by the app is stored locally on your device. We do
					not maintain servers that store your personal information. You can
					delete all app data at any time by uninstalling the app or clearing
					the app data through your device settings.
				</p>
				<div style={itemTitleStyle}>7. Children&apos;s Privacy</div>
				<p>
					Our app is not intended for children under the age of 13. We do not
					knowingly collect any information from children. If you believe we
					have inadvertently collected information from a child under 13, please
					contact us immediately.
				</p>
				<div style={itemTitleStyle}>8. User Rights</div>
				<p>You have the right to:</p>
				<ul style={{paddingLeft: 20, marginTop: 8, marginBottom: 8}}>
					<li style={{marginBottom: 4}}>
						Access and review any data the app has access to
					</li>
					<li style={{marginBottom: 4}}>
						Revoke permissions at any time through your device settings
					</li>
					<li style={{marginBottom: 4}}>
						Delete app data by uninstalling the app or clearing app data
					</li>
					<li style={{marginBottom: 4}}>
						Contact us with any questions or concerns about your privacy
					</li>
				</ul>
				<div style={itemTitleStyle}>9. Changes to This Policy</div>
				<p>
					We may update this Privacy Policy from time to time. Any changes will
					be posted on this page with an updated revision date. Please review
					this page periodically for updates. Your continued use of the app
					after changes are posted constitutes acceptance of the updated policy.
				</p>
				<div style={itemTitleStyle}>10. Contact</div>
				<p>
					If you have any questions or concerns about this Privacy Policy or how
					we handle your data, please contact us at:{' '}
					<a href='mailto:hoangtv.spk@gmail.com'>hoangtv.spk@gmail.com</a>.
				</p>
			</section>
			<section>
				<div style={sectionTitleStyle}>Tiếng Việt</div>
				<div style={itemTitleStyle}>1. Giới thiệu</div>
				<p>
					Chào mừng bạn đến với ứng dụng của chúng tôi. Chúng tôi cam kết bảo vệ
					quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi xử lý
					thông tin khi bạn sử dụng ứng dụng và các quyền truy cập mà ứng dụng
					yêu cầu.
				</p>
				<div style={itemTitleStyle}>2. Thu thập dữ liệu</div>
				<p>
					Chúng tôi tôn trọng quyền riêng tư của bạn và chỉ truy cập dữ liệu cần
					thiết để ứng dụng hoạt động bình thường. Chúng tôi <b>không</b> thu
					thập, lưu trữ hoặc truyền dữ liệu cá nhân của bạn đến máy chủ bên
					ngoài mà không có sự đồng ý rõ ràng của bạn. Tất cả dữ liệu được ứng
					dụng truy cập sẽ được lưu trữ trên thiết bị của bạn trừ khi bạn chọn
					chia sẻ.
				</p>
				<div style={itemTitleStyle}>3. Quyền truy cập và sử dụng dữ liệu</div>
				<p>Ứng dụng của chúng tôi yêu cầu các quyền sau:</p>
				<ul style={{paddingLeft: 20, marginTop: 8, marginBottom: 8}}>
					<li style={{marginBottom: 8}}>
						<b>Quyền Internet:</b> Cần thiết cho kết nối mạng và tải xuống nội
						dung khi cần. Chúng tôi không truyền dữ liệu cá nhân của bạn mà
						không có sự đồng ý của bạn.
					</li>
					<li style={{marginBottom: 8}}>
						<b>Quyền Camera:</b> Cần thiết để chụp ảnh hoặc quay video trong ứng
						dụng. Tất cả hình ảnh và video được lưu trữ cục bộ trên thiết bị của
						bạn và không được chia sẻ trừ khi bạn chọn làm như vậy.
					</li>
					<li style={{marginBottom: 8}}>
						<b>Quyền Lưu trữ (Đọc/Ghi):</b> Cần thiết để lưu và truy cập tệp,
						hình ảnh và nội dung khác trên thiết bị của bạn. Quyền này chỉ được
						sử dụng để quản lý các tệp được tạo bởi hoặc cho ứng dụng. Chúng tôi
						không truy cập các tệp bên ngoài khu vực lưu trữ được chỉ định của
						ứng dụng mà không có sự cho phép của bạn.
					</li>
					<li style={{marginBottom: 8}}>
						<b>Quyền Thông báo:</b> Cần thiết để gửi thông báo về cập nhật ứng
						dụng, thông tin quan trọng hoặc tính năng. Bạn có thể tắt thông báo
						bất cứ lúc nào thông qua cài đặt thiết bị của bạn.
					</li>
					<li style={{marginBottom: 8}}>
						<b>Quyền Chính sách Thông báo:</b> Cần thiết để quản lý cài đặt
						thông báo và đảm bảo thông báo hoạt động đúng theo sở thích của bạn.
					</li>
					<li style={{marginBottom: 8}}>
						<b>Quyền Danh bạ:</b> Cần thiết để truy cập danh sách liên hệ của
						bạn khi bạn chọn sử dụng các tính năng liên quan đến danh bạ. Thông
						tin liên hệ chỉ được truy cập khi bạn sử dụng các tính năng yêu cầu
						nó, và tất cả dữ liệu vẫn được lưu trên thiết bị của bạn. Chúng tôi
						không tải lên, lưu trữ hoặc chia sẻ danh bạ của bạn với bên thứ ba.
					</li>
				</ul>
				<div style={itemTitleStyle}>4. Cách chúng tôi sử dụng dữ liệu</div>
				<p>
					Tất cả các quyền chỉ được sử dụng để cung cấp chức năng cốt lõi của
					ứng dụng. Chúng tôi không:
				</p>
				<ul style={{paddingLeft: 20, marginTop: 8, marginBottom: 8}}>
					<li style={{marginBottom: 4}}>
						Chia sẻ dữ liệu cá nhân của bạn với bên thứ ba
					</li>
					<li style={{marginBottom: 4}}>
						Sử dụng dữ liệu của bạn cho mục đích quảng cáo hoặc tiếp thị
					</li>
					<li style={{marginBottom: 4}}>
						Bán thông tin cá nhân của bạn cho bất kỳ ai
					</li>
					<li style={{marginBottom: 4}}>
						Truy cập dữ liệu vượt quá những gì cần thiết cho chức năng ứng dụng
					</li>
				</ul>
				<div style={itemTitleStyle}>5. Dịch vụ bên thứ ba</div>
				<p>
					Ứng dụng của chúng tôi có thể sử dụng dịch vụ bên thứ ba cho chức năng
					thiết yếu (chẳng hạn như yêu cầu mạng). Các dịch vụ này có thể có
					chính sách riêng tư riêng, nhưng chúng tôi đảm bảo rằng không có dữ
					liệu cá nhân nào được truyền mà bạn không biết.
				</p>
				<div style={itemTitleStyle}>6. Lưu trữ dữ liệu</div>
				<p>
					Tất cả dữ liệu được ứng dụng truy cập được lưu trữ cục bộ trên thiết
					bị của bạn. Chúng tôi không duy trì máy chủ lưu trữ thông tin cá nhân
					của bạn. Bạn có thể xóa tất cả dữ liệu ứng dụng bất cứ lúc nào bằng
					cách gỡ cài đặt ứng dụng hoặc xóa dữ liệu ứng dụng thông qua cài đặt
					thiết bị của bạn.
				</p>
				<div style={itemTitleStyle}>7. Quyền riêng tư của trẻ em</div>
				<p>
					Ứng dụng không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu
					thập bất kỳ thông tin nào từ trẻ em. Nếu bạn tin rằng chúng tôi đã vô
					ý thu thập thông tin từ trẻ em dưới 13 tuổi, vui lòng liên hệ với
					chúng tôi ngay lập tức.
				</p>
				<div style={itemTitleStyle}>8. Quyền của người dùng</div>
				<p>Bạn có quyền:</p>
				<ul style={{paddingLeft: 20, marginTop: 8, marginBottom: 8}}>
					<li style={{marginBottom: 4}}>
						Truy cập và xem xét bất kỳ dữ liệu nào mà ứng dụng có quyền truy cập
					</li>
					<li style={{marginBottom: 4}}>
						Thu hồi quyền truy cập bất cứ lúc nào thông qua cài đặt thiết bị của
						bạn
					</li>
					<li style={{marginBottom: 4}}>
						Xóa dữ liệu ứng dụng bằng cách gỡ cài đặt ứng dụng hoặc xóa dữ liệu
						ứng dụng
					</li>
					<li style={{marginBottom: 4}}>
						Liên hệ với chúng tôi về bất kỳ câu hỏi hoặc thắc mắc nào về quyền
						riêng tư của bạn
					</li>
				</ul>
				<div style={itemTitleStyle}>9. Thay đổi chính sách</div>
				<p>
					Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Mọi
					thay đổi sẽ được đăng tải tại trang này với ngày sửa đổi được cập
					nhật. Vui lòng kiểm tra trang này định kỳ để cập nhật. Việc bạn tiếp
					tục sử dụng ứng dụng sau khi có thay đổi được đăng tải có nghĩa là bạn
					chấp nhận chính sách đã cập nhật.
				</p>
				<div style={itemTitleStyle}>10. Liên hệ</div>
				<p>
					Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về chính sách bảo mật này
					hoặc cách chúng tôi xử lý dữ liệu của bạn, vui lòng liên hệ qua email:{' '}
					<a href='mailto:hoangtv.spk@gmail.com'>hoangtv.spk@gmail.com</a>.
				</p>
			</section>
		</div>
	)
}

export default WvInitPolicyView
