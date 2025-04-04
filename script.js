import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen text-white">
        <nav className="p-4 flex justify-between items-center bg-blue-800 shadow-lg backdrop-blur-lg">
          <h1 className="text-3xl font-extrabold tracking-wide">Novel Store</h1>
          <div className="space-x-4">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/shop">Shop</NavItem>
            <NavItem to="/about">About</NavItem>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function NavItem({ to, children }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link className="text-lg font-semibold hover:text-blue-300 transition duration-300" to={to}>{children}</Link>
    </motion.div>
  );
}

function Home() {
  return (
    <motion.div className="text-center p-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-5xl font-extrabold">Welcome to Novel Store</h2>
      <p className="mt-4 text-lg">Temukan novel favoritmu dengan pengalaman yang luar biasa!</p>
    </motion.div>
  );
}

function Shop() {
  const [cart, setCart] = useState(null);
  const novels = [
    { id: 1, title: "Novel A", price: 100000 },
    { id: 2, title: "Novel B", price: 120000 },
  ];

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold text-center">Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {novels.map((novel) => (
          <motion.div key={novel.id} className="bg-blue-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 blur-lg"></div>
            <h3 className="text-2xl font-bold">{novel.title}</h3>
            <p className="text-lg">Rp {novel.price}</p>
            <motion.button
              className="mt-4 bg-blue-900 px-6 py-2 rounded-lg hover:bg-blue-600 relative overflow-hidden"
              onClick={() => setCart(novel)}
              whileTap={{ scale: 0.9 }}
            >
              Beli
              <motion.div className="absolute inset-0 bg-blue-400 opacity-20 rounded-lg"
                initial={{ scale: 0 }}
                animate={{ scale: cart?.id === novel.id ? 3 : 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.button>
          </motion.div>
        ))}
      </div>
      {cart && <motion.div className="mt-8 text-center text-lg font-semibold text-white underline" animate={{ opacity: [0, 1], scale: [0.9, 1] }} transition={{ duration: 0.5 }}>
        <Link to="/payment">Lanjut ke Pembayaran</Link>
      </motion.div>}
    </div>
  );
}

function Payment() {
  const [method, setMethod] = useState("Bank Transfer");
  return (
    <motion.div className="p-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-4xl font-bold">Pilih Metode Pembayaran</h2>
      <select className="mt-6 p-3 text-black rounded-lg shadow-md bg-white" onChange={(e) => setMethod(e.target.value)}>
        <option>Bank Transfer</option>
        <option>e-Wallet</option>
        <option>Kartu Kredit</option>
      </select>
      <p className="mt-4 text-lg">Anda memilih: <span className="font-semibold text-yellow-300">{method}</span></p>
      <motion.button className="mt-6 bg-green-500 px-6 py-3 rounded-lg hover:bg-green-700 shadow-lg" whileTap={{ scale: 0.95 }}>
        Bayar Sekarang
      </motion.button>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div className="p-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-4xl font-bold">About</h2>
      <p className="mt-6 text-lg">Website ini dibuat oleh Developer Kreatif untuk pencinta novel.</p>
      <p className="mt-2 text-lg">Credits: Tim Pengembang & Open Source Community</p>
    </motion.div>
  );
}

export default App;
