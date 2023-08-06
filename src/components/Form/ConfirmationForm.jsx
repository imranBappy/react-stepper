
import { Link } from 'react-router-dom';
import Check from '../../assets/Check.svg'
const ConfirmationForm = () => {
    return (
        <div className=' flex flex-col justify-around items-center'>
            <div className=' my-10  flex  justify-around items-center '>
                <img src={Check} alt="done" />
            </div>
            <h6 className=' mb-5 font-bold text-2xl'>Thank You!</h6>

            <p className=' max-w-[280px] text-center text-gray-400 '>Account Has Been Created. Enjoy Job Task.</p>
            <Link to={'/'}>
                <button className={`py-3 px-12 mt-5 font-semibold rounded  border text-xl border-primary text-primary`}>
                    Go To Home
                </button>
            </Link>

        </div>
    );
};

export default ConfirmationForm;