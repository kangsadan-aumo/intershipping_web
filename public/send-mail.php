<?php
// ป้องกันการเรียกใช้โดยตรงผ่านเว็บบราวเซอร์ (อนุญาตเฉพาะ POST Request)
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 405 Method Not Allowed');
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array('success' => false, 'message' => 'Method not allowed'));
    exit;
}

header('Content-Type: application/json; charset=utf-8');

// ดึงข้อมูล JSON ที่ส่งมาจากหน้าเว็บ
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$service = isset($data['service']) ? trim($data['service']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// ตรวจสอบความถูกต้องขั้นต้น
if (empty($name) || empty($email)) {
    echo json_encode(array('success' => false, 'message' => 'กรุณากรอกชื่อและอีเมล/เบอร์โทรศัพท์ติดต่อ'));
    exit;
}

// ================== CONFIGURATION ==================
// อีเมลปลายทางของคุณที่จะได้รับข้อความจากหน้าเว็บ
$to = 'intershipping@istshipping.co.th'; 

// หัวข้ออีเมล (เข้ารหัส UTF-8 เพื่อป้องกันตัวอักษรภาษาไทยเป็นต่างดาว)
$subject = "=?utf-8?B?" . base64_encode("รายการติดต่อใหม่จากเว็บไซต์: $name") . "?=";
// ===================================================

// ออกแบบเนื้อหาอีเมลแบบ HTML แบบพรีเมียมหรูหรา
$mailContent = "
<html>
<head>
    <title>รายการติดต่อใหม่จากเว็บไซต์</title>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, 'Microsoft YaHei', sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; }
        .wrapper { background-color: #f1f5f9; padding: 30px 15px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .header { background-color: #0c1a30; color: #ffffff; padding: 30px; text-align: center; }
        .header h2 { margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 0.5px; }
        .header p { margin: 5px 0 0 0; font-size: 13px; color: #94a3b8; }
        .content { padding: 40px 30px; }
        .field { margin-bottom: 25px; }
        .label { font-size: 11px; font-weight: bold; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
        .value { font-size: 15px; color: #1e293b; background: #f8fafc; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; }
        .footer { font-size: 11px; color: #94a3b8; text-align: center; padding: 20px 30px; background-color: #f8fafc; border-top: 1px solid #edf2f7; }
    </style>
</head>
<body>
    <div class='wrapper'>
        <div class='container'>
            <div class='header'>
                <h2>มีลูกค้าติดต่อจากหน้าเว็บไซต์</h2>
                <p>ข้อมูลติดต่อด่วนจากฟอร์มหน้าเว็บ Inter Shipping & Transport</p>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>ชื่อผู้ติดต่อ:</div>
                    <div class='value'>" . htmlspecialchars($name) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>อีเมล / ช่องทางติดต่อกลับ:</div>
                    <div class='value'>" . htmlspecialchars($email) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>บริการที่ให้ความสนใจ:</div>
                    <div class='value'>" . htmlspecialchars($service) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>รายละเอียดความต้องการเพิ่มเติม:</div>
                    <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
                </div>
            </div>
            <div class='footer'>
                <p>อีเมลฉบับนี้จัดส่งอัตโนมัติโดยเซิร์ฟเวอร์ HostAtom</p>
                <p>© " . date('Y') . " INTER SHIPPING & TRANSPORT CO., LTD.</p>
            </div>
        </div>
    </div>
</body>
</html>
";

// ตั้งค่าหัวข้ออีเมลมาตรฐาน
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// กุญแจสำคัญ: 
// 1. ตั้งค่า From เป็นอีเมลของโดเมนตัวเอง เพื่อให้เซิร์ฟเวอร์ HostAtom ยอมส่งเมลโดยไม่ถูกตีเป็นสแปม (SPF/DKIM check ผ่าน)
// 2. ตั้งค่า Reply-To ไปที่อีเมลของลูกค้า เพื่อให้คุณกด 'Reply' (ตอบกลับ) จากโปรแกรมเมล์เพื่อคุยกับลูกค้าได้ทันที
$domain = $_SERVER['SERVER_NAME'];
$headers .= "From: website-form@$domain" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ทำการส่งอีเมลผ่านระบบของโฮสต์
if (mail($to, $subject, $mailContent, $headers)) {
    echo json_encode(array('success' => true, 'message' => 'ส่งอีเมลเรียบร้อยแล้ว'));
} else {
    echo json_encode(array('success' => false, 'message' => 'ฟังก์ชันส่งเมลของระบบมีปัญหา'));
}
?>
