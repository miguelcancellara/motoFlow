import Navbar from "../components/layout/navBar";
import MainHero from "../components/layout/mainHero";

export default function HomePage() {
    // 🧠 1. AQUI FICA A LÓGICA (JavaScript puro, estados, funções, chamadas de API)
    // Exemplo: const [usuarioLogado, setUsuarioLogado] = useState(false);
    // Exemplo: function handleEntrar() { alert("Redirecionando..."); }

    return (
        // 👁️ 2. AQUI FICA A INTERFACE VISUAL (JSX que usa os dados da lógica acima)
        <div>
            <Navbar />
            <MainHero />
        </div>

    );
}