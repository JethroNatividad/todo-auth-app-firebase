const NoteView = () => {
    return (
        <div>
          <div>
            <button>edit</button>
            <button>delete</button>
          </div>
          <p className='text-lg font-semibold'>title</p>
          <p>content</p>
        </div>
    );
}

export default NoteView;