
 const Romms = () => {


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Card de Sala */}
                <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300">
                    <h3 className="text-lg font-bold">Sala 1</h3>
                    <p className="text-sm">Descrição da sala...</p>
                    <span className="text-sm text-gray-400">5/10 participantes</span>
                    <button className="mt-2 w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-400">Entrar</button>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300">
                    <h3 className="text-lg font-bold">Bateh Papoh</h3>
                    <p className="text-sm">Oieh</p>
                    <span className="text-sm text-gray-400">5/10 participantes</span>
                    <button className="mt-2 w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-400">Entrar</button>
                </div>
            </div>
        </>
    );
}




export default Romms