import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>React Skeletons</h1>
      </header>

      <div className="content">
        {loading ? (
          <SkeletonTheme baseColor="#98E3E0" highlightColor="#fafafa">
            <p>
              <Skeleton count={3} />
            </p>
          </SkeletonTheme>
        ) : (
          <>
            <h2>Menus</h2>
            <ul>
              <li>
                <a href="#">Menu Item 1</a>
              </li>
              <li>
                <a href="#">Menu Item 2</a>
              </li>
              <li>
                <a href="#">Menu Item 3</a>
              </li>
            </ul>
            <h2>Sub Topics</h2>
            <ol>
              <li>Sub Topic 1</li>
              <li>Sub Topic 2</li>
              <li>Sub Topic 3</li>
            </ol>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed vehicula ipsum nec odio ullamcorper, at auctor
              tortor suscipit. Duis vehicula justo eu dui lacinia, a scelerisque
              tortor vestibulum. Donec lobortis purus at leo sodales, vel congue
              dui dapibus.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
