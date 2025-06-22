import Link from 'next/link';

export default function Pagination({
  page,
  totalCount,
  totalPages,
  limit,
  pageNumbers,
  baseHref,
  queryParams = {},
  Button,
}) {
  // Helper to build href with query params
  const buildHref = (pageNum) => {
    const params = new URLSearchParams({ ...queryParams, page: pageNum });
    return `${baseHref}?${params.toString()}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {((page - 1) * limit) + 1}-{Math.min(page * limit, totalCount)} of {totalCount}
        </div>
        <div className="flex items-center gap-2">
          <Link href={buildHref(page - 1)}>
            <Button
              variant="outline"
              size="sm"
              disabled={page <= 1}
              className="px-3 py-2 text-sm disabled:opacity-50"
            >
              ← Prev
            </Button>
          </Link>
          {/* Page Numbers for larger screens */}
          <div className="hidden sm:flex items-center gap-1">
            {pageNumbers.map((pageNum) => (
              <Link key={`page-${pageNum}`} href={buildHref(pageNum)}>
                <Button
                  variant={pageNum === page ? "default" : "outline"}
                  size="sm"
                  className="w-10 h-10 p-0 text-sm"
                >
                  {pageNum}
                </Button>
              </Link>
            ))}
          </div>
          <Link href={buildHref(page + 1)}>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
              className="px-3 py-2 text-sm disabled:opacity-50"
            >
              Next →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 