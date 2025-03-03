'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type PaginationProps = {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
};

const Pagination = ({ page, totalPages }: PaginationProps) => {
  const router = useRouter();

  const onClick = (btnType: string) => {
    const pageValue = btnType === 'next' ? Number(page) + 1 : Number(page) - 1;

    // Assuming a function to build the new URL
    const newUrl = `/your-path?page=${pageValue}`;

    router.push(newUrl, { scroll: true });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        size="lg"
        variant="outline"
        onClick={() => onClick('prev')}
        disabled={Number(page) <= 1}
        className="w-24"
      >
        <ChevronLeft /> Previous
      </Button>
      Page {page} of {totalPages}
      <Button
        size="lg"
        variant="outline"
        onClick={() => onClick('next')}
        disabled={Number(page) >= totalPages}
        className="w-24"
      >
        Next <ChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
