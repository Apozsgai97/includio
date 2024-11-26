export default async function Page() {
  return (
    <div className="max-w-4xl pb-10">
      <h1 className="text-4xl font-bold text-gray-800 mt-12 text-center pb-8">
        Accessibility Index
      </h1>
      <p>
        This index assesses a business's accessibility for individuals with
        physical disabilities. Points are awarded for each feature that enhances
        access and usability.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">
        Entry Accessibility
      </h2>
      <ul>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Ramp or Stairless Entry: 20 points
          </h3>
          <p>
            Ensures wheelchair users and those with mobility aids can enter the
            building safely.
          </p>
        </li>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Automatic Doors with Buttons: 10 points
          </h3>
          <p>Reduces physical effort, making entry easier for everyone.</p>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">
        Parking Accessibility
      </h2>
      <ul>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Accessible Parking Spot: 10 points
          </h3>
          <p>
            Provides nearby parking for individuals with mobility challenges.
          </p>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">
        Restroom Accessibility
      </h2>
      <ul>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Minimum dimensions of 2450mm x 2450mm: 6 points
          </h3>
          <p>Allows enough space for wheelchairs and assistance.</p>
        </li>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Grab rails: 4 points
          </h3>
          <p>Provides support and stability.</p>
        </li>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Emergency button: 4 points
          </h3>
          <p>Ensures help can be summoned in case of accidents.</p>
        </li>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Ceiling lift: 4 points
          </h3>
          <p>
            Assists individuals who need help transitioning from their
            wheelchair.
          </p>
        </li>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Shower bed: 2 points
          </h3>
          <p>Accommodates those needing to lay down to change.</p>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">
        Main Area Accessibility
      </h2>
      <ul>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Walking space of at least 2 meters: 10 points
          </h3>
          <p>Prevents obstacles and congestion.</p>
        </li>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Easy access to restrooms: 5 points
          </h3>
          <p>Reduces effort for users to reach essential facilities.</p>
        </li>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            No stairs or high thresholds inside: 5 points
          </h3>
          <p>Eliminates barriers to movement.</p>
        </li>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Accessible tables and reachable equipments: 5 points
          </h3>
          <p>Ensures all customers can use the space comfortably.</p>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">Service Dog</h2>
      <ul>
        <li className="pl-6 pt-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Access for Service Dogs: 10 points
          </h3>
          <p>
            Allows individuals with service animals to fully participate and
            feel welcome.
          </p>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">Total: 100 points</h2>
      <p>
        Businesses can earn up to <strong>100 points</strong>. The higher the
        score, the more accessible your business is for individuals with
        physical disabilities.
      </p>
    </div>
  );
}
