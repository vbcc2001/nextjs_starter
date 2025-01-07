// src/layout.tsx
import './styles/global.css';
export default function RootLayout({ children }) {
    return (<html lang="en">
      <body>
        {/* 这里可以添加企业的Header、Sidebar等公共组件 */}
        {children}
      </body>
    </html>);
}
