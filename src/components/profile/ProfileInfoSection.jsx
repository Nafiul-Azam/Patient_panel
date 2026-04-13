import { useEffect, useState } from "react";
import GlassCard from "../common/GlassCard";
import { showQuickMessage } from "../../utils/fileActions";

function ProfileInfoSection({ profile, startInEdit = false, onSave }) {
  const [isEditing, setIsEditing] = useState(startInEdit);
  const [formData, setFormData] = useState(profile);

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  useEffect(() => {
    setIsEditing(startInEdit);
  }, [startInEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
    showQuickMessage("Personal details updated successfully.");
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <GlassCard
      title="Personal information"
      subtitle="Keep your contact and identity details up to date"
      rightSlot={
        !isEditing ? (
          <button
            type="button"
            className="compact-action-btn icon"
            onClick={() => setIsEditing(true)}
          >
            ✎ Edit
          </button>
        ) : null
      }
    >
      <div className="profile-form-grid">
        <label>
          Full name
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          Date of birth
          <input
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          Gender
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            disabled={!isEditing}
          >
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Blood group
          <input
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label className="field-wide">
          Address
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label className="field-wide">
          Emergency contact
          <input
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
      </div>

      {isEditing && (
        <div className="inline-actions">
          <button className="primary-btn" type="button" onClick={handleSave}>
            Save changes
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </GlassCard>
  );
}

export default ProfileInfoSection;
