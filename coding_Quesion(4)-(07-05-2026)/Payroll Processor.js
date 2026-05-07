// ─── Question 4: Automated Payroll Processor ─────────────────────────

const employees = [
  { id: 101, name: "Alice",   salary: 6000 },
  { id: 102, name: "Bob",     salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 },
];

// Callback: determines tax rate based on salary
const taxLogic = (salary) => salary > 5000 ? 0.20 : 0.10;

function calculatePayroll(employees, taxCallback) {
  if (!Array.isArray(employees) || typeof taxCallback !== "function") {
    console.warn("Invalid arguments passed to calculatePayroll.");
    return Promise.resolve([]);
  }

  let totalNetPayout = 0;

  const processed = employees.map((emp) => {
    if (!emp || typeof emp !== "object") return emp;

    const taxRate   = taxCallback(emp.salary);
    const tax       = emp.salary * taxRate;
    const netSalary = emp.salary - tax;
    const status    = netSalary > 4000 ? "Premium" : "Standard";

    totalNetPayout += netSalary;

    return { ...emp, tax, netSalary, status };
  });

  // Template literal summary log
  console.log(
    `Payroll Processed: Total Net Payout is $${totalNetPayout.toFixed(2)} for ${employees.length} employees.`
  );

  // Delayed return wrapped in a Promise (2000ms)
  return new Promise((resolve) => {
    setTimeout(() => resolve(processed), 2000);
  });
}

calculatePayroll(employees, taxLogic).then((result) => console.log(result));


// Synopsis:
// I kept taxLogic as a standalone callback using a ternary — salary > 5000 ? 0.20 : 0.10 — clean and independently readable.
// Inside calculatePayroll, I used .map() with the spread operator to return new employee objects without mutating the originals. For each employee I called taxCallback(emp.salary) to get the rate, calculated the tax and net salary, then assigned "Premium" or "Standard" status based on whether net salary exceeds $4000.
// I accumulated totalNetPayout as I mapped, then logged the template literal summary right after processing — before the timeout — because the log reflects the computation, not the delivery.
// The return is wrapped in a Promise around setTimeout so the caller can properly await the result. A raw setTimeout alone isn't awaitable, so this is the correct modern pattern. I also added the same argument guard as Question 2 — checking Array.isArray and typeof taxCallback — so the function fails fast if bad inputs are passed.