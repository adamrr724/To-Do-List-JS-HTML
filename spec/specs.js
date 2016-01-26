describe('toDo', function() {
  it("creates a new item for a list property", function() {
    var list = new toDo("Wash Clothes");
    expect(list.item).to.equal("Wash Clothes");
  });
});
