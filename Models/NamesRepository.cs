using react_user_project.Dtos;

namespace react_user_project.Models
{
    public class NamesRepository : INamesRepository
    {
        private readonly ApplicationDataRepository _appDataRepository;

        public NamesRepository(ApplicationDataRepository appDataRepository)
        {
            _appDataRepository = appDataRepository;
        }
        public NamesDto Get()
        {
            var name = _appDataRepository.GetRandomItem();
            return new NamesDto() { Name = name };
        }
        /// <summary>
        /// Adds a given name to the in-memory list of names
        /// </summary>
        /// <param name="name">The name to add</param>
        /// <returns>Returns a bool value on whether the name was added.</returns>
        public NamesDto Add(string name)
        {
            _appDataRepository.Add(name);
            return new NamesDto() { Name = name };
        }

    }
}