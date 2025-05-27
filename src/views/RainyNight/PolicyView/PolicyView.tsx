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

const RainyNightPolicyView = () => {
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
					Welcome to <b>Rainy Night</b>. We are committed to protecting your
					privacy. This Privacy Policy explains how we handle your information
					when you use our app.
				</p>
				<div style={itemTitleStyle}>2. Data Collection</div>
				<p>
					We do <b>not</b> collect, store, or process any personal data or
					information from users. You can use our app without providing any
					personal details.
				</p>
				<div style={itemTitleStyle}>3. Third-Party Services</div>
				<p>
					Our app does <b>not</b> use any third-party services that may collect
					information from you.
				</p>
				<div style={itemTitleStyle}>4. Permissions</div>
				<p>
					Rainy Night does <b>not</b> require any special permissions on your
					device. The app is designed solely for playing rain audio and does not
					access your camera, microphone, location, or any other sensitive
					features.
				</p>
				<div style={itemTitleStyle}>5. Children&apos;s Privacy</div>
				<p>
					Our app is not intended for children under the age of 13. We do not
					knowingly collect any information from children.
				</p>
				<div style={itemTitleStyle}>6. User Rights</div>
				<p>
					Since we do not collect any data, you do not need to request access,
					correction, or deletion of your information. If you have any concerns,
					please contact us.
				</p>
				<div style={itemTitleStyle}>7. Changes to This Policy</div>
				<p>
					We may update this Privacy Policy from time to time. Any changes will
					be posted on this page. Please review this page periodically for
					updates.
				</p>
				<div style={itemTitleStyle}>8. Contact</div>
				<p>
					If you have any questions or concerns about this Privacy Policy,
					please contact us at:{' '}
					<a href='mailto:hoangtv.spk@gmail.com'>hoangtv.spk@gmail.com</a>.
				</p>
			</section>
			<section>
				<div style={sectionTitleStyle}>Tiếng Việt</div>
				<div style={itemTitleStyle}>1. Giới thiệu</div>
				<p>
					Chào mừng bạn đến với <b>Rainy Night</b>. Chúng tôi cam kết bảo vệ
					quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi xử lý
					thông tin khi bạn sử dụng ứng dụng.
				</p>
				<div style={itemTitleStyle}>2. Thu thập dữ liệu</div>
				<p>
					Chúng tôi <b>không</b> thu thập, lưu trữ hoặc xử lý bất kỳ dữ liệu cá
					nhân nào từ người dùng. Bạn có thể sử dụng ứng dụng mà không cần cung
					cấp thông tin cá nhân.
				</p>
				<div style={itemTitleStyle}>3. Dịch vụ bên thứ ba</div>
				<p>
					Ứng dụng <b>không</b> sử dụng bất kỳ dịch vụ bên thứ ba nào có thể thu
					thập thông tin từ bạn.
				</p>
				<div style={itemTitleStyle}>4. Quyền truy cập</div>
				<p>
					Rainy Night <b>không</b> yêu cầu bất kỳ quyền truy cập đặc biệt nào
					trên thiết bị của bạn. Ứng dụng chỉ dùng để phát âm thanh tiếng mưa và
					không truy cập camera, micro, vị trí hoặc các tính năng nhạy cảm khác.
				</p>
				<div style={itemTitleStyle}>5. Quyền riêng tư của trẻ em</div>
				<p>
					Ứng dụng không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu
					thập bất kỳ thông tin nào từ trẻ em.
				</p>
				<div style={itemTitleStyle}>6. Quyền của người dùng</div>
				<p>
					Vì chúng tôi không thu thập dữ liệu, bạn không cần yêu cầu truy cập,
					chỉnh sửa hoặc xóa thông tin cá nhân. Nếu có thắc mắc, vui lòng liên
					hệ với chúng tôi.
				</p>
				<div style={itemTitleStyle}>7. Thay đổi chính sách</div>
				<p>
					Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Mọi
					thay đổi sẽ được đăng tải tại trang này. Vui lòng kiểm tra định kỳ để
					cập nhật thông tin mới nhất.
				</p>
				<div style={itemTitleStyle}>8. Liên hệ</div>
				<p>
					Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về chính sách bảo mật, vui
					lòng liên hệ qua email:{' '}
					<a href='mailto:hoangtv.spk@gmail.com'>hoangtv.spk@gmail.com</a>.
				</p>
			</section>
		</div>
	)
}

export default RainyNightPolicyView
