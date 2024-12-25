import Lottie from "lottie-react";

type Props = {
    animationData: any
}

export default function LottieComponent({
    animationData
}: Props) {
    return (
        <Lottie animationData={animationData} />
    )
}