export default async function Page() {
  return (
    <div className="max-w-4xl pb-10 p-4">
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
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Ramp or Stairless Entry -{" "}
              <span className="font-bold">20 points</span>
            </div>
            <div className="collapse-content">
              <p>
                Ensures wheelchair users and those with mobility aids can enter
                the building safely.
              </p>
            </div>
          </div>
        </li>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Automatic Doors with Buttons -{" "}
              <span className="font-bold">10 points</span>
            </div>
            <div className="collapse-content">
              <p>Reduces physical effort, making entry easier for everyone.</p>
            </div>
          </div>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">
        Parking Accessibility
      </h2>
      <ul>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Accessible Parking Spot -{" "}
              <span className="font-bold">10 points</span>
            </div>
            <div className="collapse-content">
              <p>
                Provides nearby parking for individuals with mobility
                challenges.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">
        Restroom Accessibility
      </h2>
      <ul>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Minimum dimensions of 2450mm x 2450mm -{" "}
              <span className="font-bold">6 points</span>
            </div>
            <div className="collapse-content">
              <p>Allows enough space for wheelchairs and assistance.</p>
            </div>
          </div>
        </li>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Grab rails - <span className="font-bold">4 points</span>
            </div>
            <div className="collapse-content">
              <p>Provides support and stability.</p>
            </div>
          </div>
        </li>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Emergency button - <span className="font-bold">4 points</span>
            </div>
            <div className="collapse-content">
              <p>Ensures help can be summoned in case of accidents.</p>
            </div>
          </div>
        </li>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Ceiling lift - <span className="font-bold">4 points</span>
            </div>
            <div className="collapse-content">
              <p>
                Assists individuals who need help transitioning from their
                wheelchair.
              </p>
            </div>
          </div>
        </li>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Shower bed - <span className="font-bold">2 points</span>
            </div>
            <div className="collapse-content">
              <p>Accommodates those needing to lay down to change.</p>
            </div>
          </div>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">
        Main Area Accessibility
      </h2>
      <ul>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Walking space of at least 2 meters -{" "}
              <span className="font-bold">10 points</span>
            </div>
            <div className="collapse-content">
              <p>Prevents obstacles and congestion.</p>
            </div>
          </div>
        </li>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Easy access to restroom: -{" "}
              <span className="font-bold">5 points</span>
            </div>
            <div className="collapse-content">
              <p>Reduces effort for users to reach essential facilities.</p>
            </div>
          </div>
        </li>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              No stairs or high thresholds inside: -{" "}
              <span className="font-bold">5 points</span>
            </div>
            <div className="collapse-content">
              <p>Eliminates barriers to movement.</p>
            </div>
          </div>
        </li>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Accessible tables and reachable equipments: -{" "}
              <span className="font-bold">10 points</span>
            </div>
            <div className="collapse-content">
              <p>Ensures all customers can use the space comfortably.</p>
            </div>
          </div>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">Service Dog</h2>
      <ul>
        <li className="pl-6 pt-3">
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Access for Service Dogs: - <span className="font-bold">10 points</span>
            </div>
            <div className="collapse-content">
              <p>
                Allows individuals with service animals to fully participate and
                feel welcome.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 pt-8">
        Total: 100 points
      </h2>
      <p>
        Businesses can earn up to <strong>100 points</strong>. The higher the
        score, the more accessible your business is for individuals with
        physical disabilities.
      </p>
    </div>
  );
}
