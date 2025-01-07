export default function Button({ children, onClick }) {
    return (<button style={{
            padding: '8px 16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer'
        }} onClick={onClick}>
      {children}
    </button>);
}
