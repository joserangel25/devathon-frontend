import { MdLocationOff } from 'react-icons/md';

export const ErrorAccessLocation = () => {
  return (
    <div className='fixed left-5 bottom-5 z-10'>
      <div className='bg-red-200 text-red-700  py-3 px-5 rounded-lg flex gap-2 items-center'>
        <MdLocationOff size={20} />
        <p className='text-sm font-bold'>
          ¡Por favor permita el acceso a la ubicación para una mejor experiencia!
        </p>
      </div>
    </div>
  );
};
