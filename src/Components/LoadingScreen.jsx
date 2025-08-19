import loader from "../assets/preloader.gif"

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img className="w-[50%] md:w-[25%]" src={loader} alt="loading-icon" />
    </div>
  )
}

export default LoadingScreen
