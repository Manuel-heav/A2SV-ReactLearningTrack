import ContactForm from "./_comp/ContactForm";

function App() {
  return (
    <div className="flex h-[100vh] justify-center items-center w-[100vw]">
      <div className="bg-[#1D1825] p-12 mt-5 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-5">CONTACT FORM</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
