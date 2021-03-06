export function getPaginatedItems(arr,page,itemsPerPage){
  var page = page || 1,
    per_page = itemsPerPage,
    offset = (page - 1) * per_page,
    paginatedItems = arr.slice(offset, per_page * page);
  return {
    page: page,
    per_page: per_page,
    total: arr.length,
    total_pages: Math.ceil(arr.length / per_page),
    data: paginatedItems
  };
}
