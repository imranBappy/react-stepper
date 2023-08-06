import { HiCheck } from 'react-icons/hi'
const Stepper = ({ step }) => {
    const { security, personal, confirmation } = step;
    return (
        <ol className=" h-full max-w-4xl mx-5    mt-10 md:m-auto flex items-center w-full p-3 space-x-2 text-sm font-medium text-center  sm:p-4 sm:space-x-4">
            <li className="flex items-center text-blue-600 dark:text-blue-500">
                <span className={`step ${personal && "step_done"}  `}>
                    {
                        personal === 'done' ? <HiCheck fontSize={25} /> : 1
                    }
                </span>
                <span className={`lg:w-16 md:w-16  sm:w-10  h-[1px]  mx-1 bg-primary`}></span>
                <span className="hidden sm:inline-flex sm:ml-2 text-2xl">Information</span>
            </li>

            <li className="flex items-center">
                <span className={`step  ${security && "step_done"} `}>
                    {
                        security === 'done' ? <HiCheck fontSize={25} /> : 1
                    }
                </span>
                <span className={`lg:w-16 md:w-16 sm:w-10 h-[1px]  mx-1 bg-primary`}></span>
                <span className="hidden sm:inline-flex sm:ml-2 text-2xl">Security</span>

            </li>
            <li className="flex   items-center">

                <span className={`step  ${confirmation && "step_done"} `}>
                    {
                        confirmation === 'done' ? <HiCheck fontSize={25} /> : 1
                    }
                </span>

                <span className={`lg:w-16 md:w-16 sm:w-10 h-[1px]  mx-1 bg-primary`}></span>
                {/* <svg height="1" width="150">
                    <line x1="1" y1="1" x2="140" y2="1" stroke="#000000" strokeWidth="2" />
                </svg> */}
                <span className="text-2xl ml-2">Confirmation</span>
            </li>
        </ol>
    );
};

export default Stepper;