
export const HotMatchLoadingSkeletonTemplate = () => {
  return (
    <div className="animate-pulse h-[60px] bg-zinc-8 flex flex-col justify-between p-3">
        <div className="bg-zinc-7 h-2 w-[100px] translate-x-[45px] rounded"></div>
        <div className="flex justify-between">
            <div className="bg-zinc-7 h-4 w-4 rounded-full"></div>
            <div className="bg-zinc-7 h-4 w-[150px] rounded"></div>
            <div className="bg-zinc-7 h-4 w-8 rounded"></div>
        </div>
    </div>
  )
}
