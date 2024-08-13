
# Greenhouse Harvest SDK

## Description

The Greenhouse Harvest SDK is a TypeScript library for interacting with the Greenhouse Harvest API. It provides an easy-to-use interface for managing candidates, applications, custom fields, and more within your Greenhouse recruitment system.

## Installation

To install the Greenhouse Harvest SDK, use npm:

```bash
npm install @cookd/harvest-sdk
```

## Usage

First, import the SDK and create an instance:

```typescript
import GreenhouseHarvestSDK from '@cookd/harvest-sdk';

const sdk = new GreenhouseHarvestSDK('your-api-key');
```

### Examples

#### Working with Applications

```typescript
// List applications
const applications = await sdk.applications.listApplications('user-id', { per_page: 10 });

// Get a specific application
const application = await sdk.applications.getApplication('user-id', 12345);

// Add an application
const newApplication = await sdk.applications.addApplication('user-id', 67890, {
  job_id: 54321,
  prospect: false
});

// Update an application
const updatedApplication = await sdk.applications.updateApplication('user-id', 12345, {
  source_id: 100
});
```

#### Working with Candidates

```typescript
// List candidates
const candidates = await sdk.candidates.listCandidates({ per_page: 20 });

// Get a specific candidate
const candidate = await sdk.candidates.getCandidate(12345);

// Add a candidate
const newCandidate = await sdk.candidates.addCandidate({
  first_name: 'John',
  last_name: 'Doe',
  email_addresses: [{ value: 'john.doe@example.com', type: 'personal' }]
});

// Update a candidate
const updatedCandidate = await sdk.candidates.updateCandidate(12345, {
  company: 'New Company Inc.'
});
```

#### Working with Custom Fields

```typescript
// List custom fields
const customFields = await sdk.customFields.listCustomFields('job', 'user-id');

// Get a specific custom field
const customField = await sdk.customFields.getCustomField(12345, 'user-id');

// Create a custom field
const newCustomField = await sdk.customFields.createCustomField({
  name: 'New Custom Field',
  field_type: 'candidate',
  value_type: 'short_text'
}, 'user-id');

// Update a custom field
const updatedCustomField = await sdk.customFields.updateCustomField(12345, {
  name: 'Updated Custom Field'
}, 'user-id');
```

## API Reference

The SDK is divided into several modules:

- `applications`: Methods for managing job applications
- `candidates`: Methods for managing candidates
- `customFields`: Methods for managing custom fields

Each module contains methods that correspond to Greenhouse Harvest API endpoints. For full details on available methods and their parameters, please refer to the source code or generated TypeScript definitions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.