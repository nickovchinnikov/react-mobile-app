global.matchMedia = jest.fn().mockReturnValue({ matches: {}, addListener: jest.fn() })

global.FakeSocketURL = 'ws://localhost:8080'
