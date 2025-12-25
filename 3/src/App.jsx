import UserList from "./UserList";

function App() {
  const users = [
    { name: "احسان علیدوست", age: 25, city: "تهران" },
    { name: "سارا معینی", age: 22, city: "اصفهان" },
    { name: "رضا وکیلی", age: 30, city: "شیراز" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[380px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          👤 لیست کاربران
        </h1>

        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;