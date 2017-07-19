using DosEquis.Com.Core.Entities;

namespace DosEquis.Com.Core.Repositories
{
    public interface IRecipeRepository
    {
        Recipe[] GetRecipes();
        Recipe GetRecipeById(string Id);
    }
}
