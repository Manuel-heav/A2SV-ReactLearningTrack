// Copied from chatgpt
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import JobCard from "../components/JobCard";
import Cookie from "js-cookie";

describe("JobCard", () => {
  it("should bookmark and unbookmark a job", async () => {
    const job = {
      id: "1",
      title: "Software Engineer",
      desc: "Develop and maintain web applications.",
      location: "New York, NY",
      company: "Acme Inc.",
      logo: "/job1.png",
      isBookmarked: false,
    };

    const token = Cookie.get("hireHubAccessToken");

    const mockAxiosPost = jest
      .spyOn(axios, "post")
      .mockResolvedValue({ data: {} });
    const mockAxiosDelete = jest
      .spyOn(axios, "delete")
      .mockResolvedValue({ data: {} });

    const { getByTestId } = render(<JobCard {...job} />);

    const bookmarkButton = getByTestId("bookmark-button");

    fireEvent.click(bookmarkButton);
    await waitFor(() =>
      expect(mockAxiosPost).toHaveBeenCalledWith(
        `https://akil-backend.onrender.com/bookmarks/${job.id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    fireEvent.click(bookmarkButton);
    await waitFor(() =>
      expect(mockAxiosDelete).toHaveBeenCalledWith(
        `https://akil-backend.onrender.com/bookmarks/${job.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    mockAxiosPost.mockRestore();
    mockAxiosDelete.mockRestore();
  });
});
