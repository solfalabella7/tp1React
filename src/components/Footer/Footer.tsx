const Footer = () => {
    const footerStyle = {
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        textAlign: 'center' as 'center',
    };

    return (
        <footer style={footerStyle}>
            <p>&copy; 2023 Tu Empresa - Todos los derechos reservados</p>
        </footer>
    );
    
}

export default Footer