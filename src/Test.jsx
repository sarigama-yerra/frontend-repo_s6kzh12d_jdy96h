import { useState, useEffect } from 'react'

function Test() {
  const [backendStatus, setBackendStatus] = useState('checking...')
  const [backendUrl, setBackendUrl] = useState('')
  const [databaseStatus, setDatabaseStatus] = useState(null)

  useEffect(() => {
    checkBackendConnection()
  }, [])

  const checkBackendConnection = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      setBackendUrl(baseUrl)

      const response = await fetch(`${baseUrl}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })

      if (response.ok) {
        const data = await response.json()
        setBackendStatus(`✅ Connected - ${data.message || 'OK'}`)
        await checkDatabaseConnection(baseUrl)
      } else {
        setBackendStatus(`❌ Failed - ${response.status} ${response.statusText}`)
        setDatabaseStatus({ error: 'Backend not accessible' })
      }
    } catch (error) {
      setBackendStatus(`❌ Error - ${error.message}`)
      setDatabaseStatus({ error: 'Backend not accessible' })
    }
  }

  const checkDatabaseConnection = async (baseUrl) => {
    try {
      const response = await fetch(`${baseUrl}/test`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
      if (response.ok) {
        const dbData = await response.json()
        setDatabaseStatus(dbData)
      } else {
        setDatabaseStatus({ error: `Failed to check database - ${response.status}` })
      }
    } catch (error) {
      setDatabaseStatus({ error: `Database check failed - ${error.message}` })
    }
  }

  return (
    <div dir="rtl" className="min-h-screen piq-bg flex items-center justify-center p-8">
      <div className="neon-card neon-edge p-8 rounded-2xl w-full max-w-xl">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-6">اختبار الاتصال بالخادم وقاعدة البيانات</h1>

        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold piq-text-secondary mb-2">رابط الخادم:</h3>
            <p className="text-xs piq-text-secondary break-all piq-bg-panel p-2 rounded border border-white/5">{backendUrl || 'جارِ الكشف...'}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold piq-text-secondary mb-2">حالة الخادم:</h3>
            <p className="text-sm font-mono piq-bg-panel p-2 rounded border border-white/5">{backendStatus}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold piq-text-secondary mb-2">حالة قاعدة البيانات:</h3>
            <div className="text-sm piq-bg-panel p-3 rounded border border-white/5">
              {databaseStatus ? (
                databaseStatus.error ? (
                  <p className="text-red-400 font-mono">{databaseStatus.error}</p>
                ) : (
                  <div className="space-y-1 piq-text-secondary">
                    <p><span className="font-semibold text-white">الخادم:</span> {databaseStatus.backend}</p>
                    <p><span className="font-semibold text-white">قاعدة البيانات:</span> {databaseStatus.database}</p>
                    <p><span className="font-semibold text-white">عنوان القاعدة:</span> {databaseStatus.database_url}</p>
                    <p><span className="font-semibold text-white">الاسم:</span> {databaseStatus.database_name}</p>
                    <p><span className="font-semibold text-white">الاتصال:</span> {databaseStatus.connection_status}</p>
                    {databaseStatus.collections && databaseStatus.collections.length > 0 && (
                      <p><span className="font-semibold text-white">المجموعات:</span> {databaseStatus.collections.join(', ')}</p>
                    )}
                  </div>
                )
              ) : (
                <p className="piq-text-secondary font-mono">جارِ الفحص...</p>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={checkBackendConnection} className="neon-button px-4 py-2 rounded-md font-semibold text-sm">اختبار مجددًا</button>
            <a href="/" className="px-4 py-2 rounded-md font-semibold text-sm neon-outline">العودة للرئيسية</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
