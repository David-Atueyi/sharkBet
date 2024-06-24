
export const TransactionHistoryLoadingSkeletonTemplate = () => {
  return (
    <div className='animate-pulse h-[66px] bg-zinc-8 flex justify-between p-4 border-b-2 border-b-zinc-5 gap-2'>
      <div className='flex flex-col justify-between gap-2'>
        <div className='bg-zinc-7 h-4 w-[150px] '></div>
        <div className='bg-zinc-7 h-3 w-[130px] '></div>
      </div>
      <div className='flex flex-col justify-between items-end gap-2'>
        <div className='bg-zinc-7 h-4 w-[90px] '></div>
        <div className='bg-zinc-7 h-3 w-[70px] '></div>
      </div>
    </div>
  )
}
