const Stack = () => {
  return (
    <div id="stack" className="snap-start min-h-[calc(100vh-96px)]">
      <div className="relative w-40 h-44">
        {/* <!-- Hexágono estilizado --> */}
        <div className="absolute inset-0 bg-gray-600 clip-hexagon"></div>

        {/* <!-- Contenido dentro del hexágono --> */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <img src="/ruta/de8a960c-2ba6-4d74-a7e5-20a1c4ced55c.png" alt="React Logo" className="w-12 h-12 mb-2" />
          <span className="text-sm font-medium text-gray-800">JavaScript</span>
        </div>
      </div>
    </div>

  );
};

export default Stack;
