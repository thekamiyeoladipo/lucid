import DreamCard from "../components/DreamCard";
import DreamImage from "../assets/imageone.png";

export default function Gallery() {
  return (
    <div className="pt-48 p-6 min-h-screen bg-gray-900">
      <div className="flex flex-wrap justify-center gap-6">
       
          <DreamCard
            id="1"
            title="Flying Through Purple Clouds"
            date="Nov 15"
            snippet="Everything was quiet except the hum of coral cities rising from the sea floor..."
            tag="🧘 Peaceful"
            imageUrl={DreamImage}
          />
          <DreamCard
            id="2"
            title="Underwater Kingdom"
            date="May 10"
            snippet="Everything was quiet except the hum of coral cities rising from the sea floor..."
            tag="☁️ Surreal"
            imageUrl={DreamImage}
          />
        
      </div>
    </div>
  );
}
