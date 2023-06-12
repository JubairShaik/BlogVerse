const stats = [
  { id: 1, name: 'Active Users', value: '44 million' },
  { id: 2, name: 'Posts Published', value: '1,000+' },
  { id: 3, name: 'Engaged Readers', value: '10,000+' },
];

 
  export default function Banner() {
    return (
      <div className="bg-white py-24 sm:py-32">
      
    
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className=" text-[15px] sm:text-[20px] leading-7 text-green-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  
  