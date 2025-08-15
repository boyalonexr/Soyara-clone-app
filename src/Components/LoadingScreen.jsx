import loader from "../assets/preloader.gif"

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={loader} alt="" />
    </div>
  )
}

export default LoadingScreen
