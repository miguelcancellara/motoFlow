export default function Navbar() {
    return (
        <nav className="navBar">
            <div className="container">
                <div>
                    <h1><span style={{ color: "var(--cor-terciaria)" }}> Moto</span><span style={{ color: "var(--cor-primaria)" }}>Flow</span></h1>
                </div>

                <div>
                    <button className="btn-entrar">Entrar</button>
                    <button className="btn-entrar">Cadastrar</button>
                </div>
            </div>

        </nav>
    )
}