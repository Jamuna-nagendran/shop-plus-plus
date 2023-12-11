import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PaginationComponent = ({
  categoryName,
  searchQuery,
  paginationLinksNumber,
  pageNum,
}) => {
  const category = categoryName ? `category/${categoryName}/` : "";
  const search = searchQuery ? `search/${searchQuery}/` : "";
  const url = `/product-list/${category}${search}`;

  const showPages = 3; // Number of pages to show on each side of the current page

  const renderPaginationItems = () => {
    const items = [];

    // Prev button
    items.push(
      <LinkContainer key="prev" to={`${url}${pageNum - 1}`}>
        <Pagination.Prev disabled={pageNum === 1} />
      </LinkContainer>
    );

    // First page
    items.push(
      <LinkContainer key={1} to={`${url}1`}>
        <Pagination.Item active={1 === parseInt(pageNum)}>{1}</Pagination.Item>
      </LinkContainer>
    );

    // Ellipsis before current page
    if (pageNum - showPages > 2) {
      items.push(<Pagination.Ellipsis key="ellipsis-before" />);
    }

    // Pages around the current page
    for (
      let i = Math.max(2, pageNum - showPages);
      i <= Math.min(paginationLinksNumber - 1, pageNum + showPages);
      i++
    ) {
      items.push(
        <LinkContainer key={i} to={`${url}${i}`}>
          <Pagination.Item active={i === parseInt(pageNum)}>
            {i}
          </Pagination.Item>
        </LinkContainer>
      );
    }

    // Ellipsis after current page
    if (pageNum + showPages < paginationLinksNumber - 1) {
      items.push(<Pagination.Ellipsis key="ellipsis-after" />);
    }

    // Last page
    items.push(
      <LinkContainer
        key={paginationLinksNumber}
        to={`${url}${paginationLinksNumber}`}
      >
        <Pagination.Item active={paginationLinksNumber === parseInt(pageNum)}>
          {paginationLinksNumber}
        </Pagination.Item>
      </LinkContainer>
    );

    // Next button
    items.push(
      <LinkContainer key="next" to={`${url}${pageNum + 1}`}>
        <Pagination.Next disabled={pageNum === paginationLinksNumber} />
      </LinkContainer>
    );

    return items;
  };

  return (
    <Pagination className="justify-content-center" size="lg">
      {renderPaginationItems()}
    </Pagination>
  );
};

export default PaginationComponent;
