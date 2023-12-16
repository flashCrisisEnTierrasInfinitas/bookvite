export default function Login() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh'
        }}>
            <a href="/listBooks" style={{
                background: '#074481',
                padding: '5px',
                textDecoration: 'none',
                color: '#fff',
                textAlign: 'center',
                borderRadius: '5px'
            }}>Login</a>
        </div>
    )
}