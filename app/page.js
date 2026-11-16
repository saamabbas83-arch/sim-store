"use client";

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      color: 'white',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.15)',
        padding: '40px',
        borderRadius: '24px',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        maxWidth: '350px',
        width: '100%'
      }}>
        <h1 style={{ fontSize: '32px', margin: '0 0 10px', fontWeight: '800' }}>📡 Sim Store</h1>
        <p style={{ opacity: 0.9, marginBottom: '30px', fontSize: '15px' }}>منصتك الذكية والآمنة للأرقام الدائمة</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
          <div><div style={{ fontSize: '20px', fontWeight: 'bold', color: '#a78bfa' }}>12K+</div><div style={{ fontSize: '12px', opacity: 0.7 }}>رقم نشط</div></div>
          <div><div style={{ fontSize: '20px', fontWeight: 'bold', color: '#a78bfa' }}>99%</div><div style={{ fontSize: '12px', opacity: 0.7 }}>نسبة النجاح</div></div>
        </div>

        <button 
          style={{
            width: '100%',
            padding: '16px',
            background: 'white',
            color: '#764ba2',
            border: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
          }} 
          onClick={() => alert('مرحباً بك في Sim Store! 🚀')}
        >
          ابدأ الآن
        </button>
      </div>
    </main>
  )
}
