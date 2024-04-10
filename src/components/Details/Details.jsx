

export default function Details({ name, details }) {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 style={{fontSize:"1.2rem"}} className="text-base font-semibold leading-7 text-gray-900">
          Course Information
        </h3>
        <p style={{fontSize:"1.2rem"}} className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{name}</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt style={{fontSize:"1.1rem"}} className="text-sm font-medium leading-6 text-gray-900">
              Course Description
            </dt>
            <dd style={{fontSize:"1.1rem"}} className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {details}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
