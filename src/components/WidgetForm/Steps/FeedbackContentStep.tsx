import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
}

export function FeedbackContentStep({ feedbackType }: FeedbackContentStepProps) {
    
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
            <header>

                <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft weight="bold" className="w-4 h-4 "/>
                </button>

                <span className="text-xl leading-7 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}  className="w-6 h-6"/>
                    {feedbackTypeInfo.title}
                </span>
                
                <CloseButton />

            </header>

            <form className="m-4 w-full">
                <textarea 
                
                className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100  border-zinc-600 bg-transparent rounded-md "
                placeholder="Conte com detalhes o que está acontecendo....."
                />
            </form>
        </>
    )
}