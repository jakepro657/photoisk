import ScreenContainer from "../components/container/ScreenContainer"
import LottieComponent from "../components/lottie/LottieComponent"
import loading from "../assets/lottie/loading.json"

function Landing() {
    return (
        <ScreenContainer>
            <div>
                <h1 className='text-3xl font-bold text-center mt-8'>포토이스크</h1>
                <p className='text-center mt-4'>포토이스크, AI로 남기는 여러분의 소중한 인생샷</p>
                <LottieComponent animationData={loading} />
            </div>
        </ScreenContainer>
    )
}

export default Landing