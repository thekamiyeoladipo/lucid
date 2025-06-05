import DreamEntryForm from "../components/DreamEntryForm";

export default function NewDream() {
  const handleNewDream = (dream) => {
    console.log("New Dream Saved:", dream);
    // Save to local storage / state here
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
      <DreamEntryForm onSubmit={handleNewDream} />
    </div>
  );
}
