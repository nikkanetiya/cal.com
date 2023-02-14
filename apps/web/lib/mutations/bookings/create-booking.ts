import * as fetch from "@calcom/lib/fetch-wrapper";

import { BookingCreateBody, BookingResponse } from "@lib/types/booking";

const createBooking = async (data: BookingCreateBody) => {
  const response = await fetch.post<BookingCreateBody, BookingResponse>("/api/book/event", data);

  return response;
};

export default createBooking;
