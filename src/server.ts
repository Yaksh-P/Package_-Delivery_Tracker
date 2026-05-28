import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

const samplePackages = [
  {
    id: "PKG-1001",
    recipientName: "Ava Patel",
    carrier: "Canada Post",
    status: "In Transit",
    expectedDeliveryDate: "2026-06-02",
  },
  {
    id: "PKG-1002",
    recipientName: "Liam Chen",
    carrier: "FedEx",
    status: "Delivered",
    expectedDeliveryDate: "2026-05-27",
  },
];

app.get("/", (_req, res) => {
  res.json({
    message: "Package Delivery Tracker API starter is running.",
    docs: "/api/packages",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/packages", (_req, res) => {
  res.json(samplePackages);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
