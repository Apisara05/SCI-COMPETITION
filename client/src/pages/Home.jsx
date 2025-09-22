// Home page component
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          ยินดีต้อนรับสู่ App
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          แพลตฟอร์มที่ดีที่สุดสำหรับการจัดการและเชื่อมต่อกับชุมชนของคุณ
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="text-blue-500 mb-4">
            <User size={48} />
          </div>
          <h3 className="text-xl font-bold mb-3">จัดการบัญชี</h3>
          <p className="text-gray-600">
            สร้างและจัดการโปรไฟล์ส่วนตัวของคุณได้อย่างง่ายดาย
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="text-purple-500 mb-4">
            <Lock size={48} />
          </div>
          <h3 className="text-xl font-bold mb-3">ปลอดภัย</h3>
          <p className="text-gray-600">
            ระบบความปลอดภัยระดับสูงเพื่อปกป้องข้อมูลของคุณ
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="text-green-500 mb-4">
            <Mail size={48} />
          </div>
          <h3 className="text-xl font-bold mb-3">การสื่อสาร</h3>
          <p className="text-gray-600">
            เชื่อมต่อและสื่อสารกับเพื่อนและครอบครัวได้ทุกที่ทุกเวลา
          </p>
        </div>
      </div>

      {!isLoggedIn && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            เริ่มต้นใช้งานวันนี้
          </h2>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("register")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium"
            >
              สมัครสมาชิกฟรี
            </button>
            <button
              onClick={() => setCurrentPage("login")}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all font-medium"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);
