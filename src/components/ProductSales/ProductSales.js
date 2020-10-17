import React, { Suspense } from "react";
import Loading from "../Loading/Loading";
const SalesChart = React.lazy(() => import("../SalesChart/SalesChart"));
const SalesTable = React.lazy(() => import("../SalesTable/SalesTable"));

function ProductSales() {
  return (
    <div>
      <Suspense fallback={Loading}>
        <section>
          <SalesChart />
          <SalesTable />
        </section>
      </Suspense>
    </div>
  );
}

export default ProductSales;
