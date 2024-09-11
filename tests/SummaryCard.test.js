import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SummaryCard from "../src/app/dashboard/components/summary-card";
import ErrorBoundary from "../ErrorBoundary";
import { dashboardData } from "../src/app/dashboard/components/db";

test("renders Total Users card", () => {
  render(
    <ErrorBoundary>
      <SummaryCard />
    </ErrorBoundary>
  );

  // Check for the Total Users text
  const totalUsersText = screen.getByText(/Total Users/i);
  expect(totalUsersText).toBeInTheDocument();
});

test("renders all cards", () => {
  render(<SummaryCard />);

  const totalUsersCard = screen.getByText(/Total Users/i);
  const activeUsersCard = screen.getByText(/Active Users/i);
  const totalStreamsCard = screen.getByText(/Total Streams/i);
  const revenueCard = screen.getByText(/Revenue/i);
  const topArtistCard = screen.getByText(/Top Artist/i);

  expect(totalUsersCard).toBeInTheDocument();
  expect(activeUsersCard).toBeInTheDocument();
  expect(totalStreamsCard).toBeInTheDocument();
  expect(revenueCard).toBeInTheDocument();
  expect(topArtistCard).toBeInTheDocument();
});

test("displays correct metrics", () => {
  render(<SummaryCard />);

  expect(
    screen.getByText(dashboardData.metrics.totalUsers)
  ).toBeInTheDocument();
  expect(
    screen.getByText(dashboardData.metrics.activeUsers)
  ).toBeInTheDocument();
  expect(
    screen.getByText(dashboardData.metrics.totalStreams)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`$${dashboardData.metrics.revenue}`)
  ).toBeInTheDocument();
  expect(screen.getByText(dashboardData.metrics.topArtist)).toBeInTheDocument();
});
