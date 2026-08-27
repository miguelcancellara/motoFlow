//Tudo que aparece em todas as telas fica aqui.
//Exemplo: cabeçalho, menu, logo, tema

import "./globals.css";


export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}